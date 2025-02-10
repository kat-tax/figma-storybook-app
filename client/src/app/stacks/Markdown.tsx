import {memo} from 'react';
import {useStyles} from 'react-native-unistyles';
import {Platform, StyleSheet} from 'react-native';
import {Markdown as MarkdownBase} from 'react-exo/markdown';
import {useTheme} from 'app/hooks/use-theme';
import {Code} from 'react-exo/code';

export const Markdown = memo(({text}: {text: string}) => {
  const {theme} = useStyles();
  const [scheme] = useTheme();

  if (!text) return null;

  return (
    <MarkdownBase
      mergeStyle={false}
      rules={{
        code_block: (node, parents, children, styles) => {
          console.log('>> code_block', node, parents, children, styles);
          return (
            <Code
              lang="typescript"
              theme={scheme === 'dark' ? 'dark-plus' : 'light-plus'}>
              {node.content}
            </Code>
          );
        },
      }}
      style={{
        body: {
          gap: theme.display.space2,
          width: '100%',
          fontFamily: theme.font.family,
          fontSize: theme.typography.size1,
          lineHeight: theme.typography.lineHeight5,
          letterSpacing: theme.font.spacing,
          color: theme.colors.foreground,
        },
        // Headings
        heading1: {
          flexDirection: 'row',
          fontSize: theme.typography.size8,
          lineHeight: theme.typography.size8,
          letterSpacing: theme.typography.letterSpacing8,
        },
        heading2: {
          flexDirection: 'row',
          fontSize: theme.typography.size6,
          lineHeight: theme.typography.size6,
          letterSpacing: theme.typography.letterSpacing6,
        },
        heading3: {
          flexDirection: 'row',
          fontSize: theme.typography.size4,
          lineHeight: theme.typography.size4,
          letterSpacing: theme.typography.letterSpacing4,
        },
        heading4: {
          flexDirection: 'row',
          fontSize: theme.typography.size3,
          lineHeight: theme.typography.size3,
          letterSpacing: theme.typography.letterSpacing3,
        },
        heading5: {
          flexDirection: 'row',
          fontSize: theme.typography.size2,
          lineHeight: theme.typography.size2,
          letterSpacing: theme.typography.letterSpacing2,
        },
        heading6: {
          flexDirection: 'row',
          fontSize: theme.typography.size1,
          lineHeight: theme.typography.size1,
          letterSpacing: theme.typography.letterSpacing1,
        },
        // Horizontal Rule
        hr: {
          height: 1,
          backgroundColor: theme.colors.border,
        },
        // Emphasis
        strong: {
          fontWeight: 'bold',
        },
        em: {
          fontStyle: 'italic',
        },
        s: {
          textDecorationLine: 'line-through',
        },
        // Blockquotes
        blockquote: {
          marginLeft: theme.display.space2,
          paddingHorizontal: theme.display.space2,
          backgroundColor: theme.colors.background,
          borderColor: theme.colors.border,
          borderRadius: theme.display.radius3,
          borderLeftWidth: 4,
        },
        // Lists
        bullet_list: {},
        ordered_list: {},
        list_item: {
          flexDirection: 'row',
          justifyContent: 'flex-start',
        },
        // @pseudo class, does not have a unique render rule
        bullet_list_icon: {
          marginLeft: theme.display.space2,
          marginRight: theme.display.space2,
        },
        // @pseudo class, does not have a unique render rule
        bullet_list_content: {
          flex: 1,
        },
        // @pseudo class, does not have a unique render rule
        ordered_list_icon: {
          marginLeft: theme.display.space2,
          marginRight: theme.display.space2,
        },
        // @pseudo class, does not have a unique render rule
        ordered_list_content: {
          flex: 1,
        },
        // Code
        code_inline: {
          fontSize: theme.font.size,
          padding: theme.display.space1,
          backgroundColor: theme.colors.card,
          borderColor: theme.colors.border,
          borderRadius: theme.display.radius3,
          borderWidth: StyleSheet.hairlineWidth,
          color: theme.colors.info,
          ...Platform.select({
            ios: {
              fontFamily: 'Courier',
            },
            default: {
              fontFamily: 'monospace',
            },
          }),
        },
        code_block: {
          padding: theme.display.space3,
          backgroundColor: theme.colors.card,
          borderColor: theme.colors.border,
          borderRadius: theme.display.radius3,
          borderWidth: StyleSheet.hairlineWidth,
          color: theme.colors.cardForeground,
          ...Platform.select({
            ios: {
              fontFamily: 'Courier',
            },
            default: {
              fontFamily: 'monospace',
            },
          }),
        },
        fence: {
          padding: theme.display.space3,
          backgroundColor: theme.colors.card,
          borderColor: theme.colors.border,
          borderRadius: theme.display.radius3,
          borderWidth: StyleSheet.hairlineWidth,
          color: theme.colors.cardForeground,
          ...Platform.select({
            ios: {
              fontFamily: 'Courier',
            },
            default: {
              fontFamily: 'monospace',
            },
          }),
        },
        // Tables
        table: {
          borderColor: theme.colors.border,
          borderRadius: theme.display.radius3,
          borderWidth: StyleSheet.hairlineWidth,
        },
        thead: {},
        tbody: {},
        th: {
          flex: 1,
          padding: theme.display.space2,
        },
        tr: {
          flexDirection: 'row',
          borderColor: theme.colors.border,
          borderBottomWidth: StyleSheet.hairlineWidth,
        },
        td: {
          flex: 1,
          padding: theme.display.space2,
        },
        // Links
        link: {
          textDecorationLine: 'underline',
        },
        blocklink: {
          flex: 1,
          borderColor: theme.colors.border,
          borderBottomWidth: StyleSheet.hairlineWidth,
        },
        // Images
        image: {
          flex: 1,
        },
        // Text Output
        text: {},
        textgroup: {},
        paragraph: {
          width: '100%',
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          marginVertical: theme.display.space3,
          fontSize: theme.font.contentSize,
          fontWeight: theme.font.contentWeight,
          lineHeight: theme.font.contentHeight,
          letterSpacing: theme.font.contentSpacing,
        },
        hardbreak: {
          width: '100%',
          height: 1,
        },
        softbreak: {},
        // Never used but retained for completeness
        pre: {},
        inline: {},
        span: {},
      }}>
      {text}
    </MarkdownBase>
  );
})
