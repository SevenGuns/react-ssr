import React from 'react';
// 高阶组件 在context中添加styles
export default function withStyles(style) {
  return ComposedComponent => {
    function WithStyles(props) {
      const { staticContext } = props;
      if (staticContext) {
        staticContext.css.push(style._getCss());
      }
      return <ComposedComponent {...props}></ComposedComponent>;
    }
    const displayName =
      ComposedComponent.displayName || ComposedComponent.name || 'Component';
    WithStyles.displayName = `WithStyles(${displayName})`;
    return WithStyles;
  };
}
