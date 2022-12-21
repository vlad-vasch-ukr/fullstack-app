import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './TransitionGroupWrapper.scss';

export default function TransitionGroupWrapper({
  itemsList,
  Component,
  timeout = 500,
  className = '',
  ...args
}) {
  const renderFunc = (item, index) => (
    <Component item={item} index={index} {...args} ref={item.nodeRef} key={item.id} />
  );

  return (
    <TransitionGroup>
      {itemsList.map((item, index) => (
        <CSSTransition
          key={item.id}
          nodeRef={item.nodeRef}
          timeout={timeout}
          classNames={classNames('transition-group', className)}>
          {renderFunc(item, index)}
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

TransitionGroupWrapper.propsTypes = {
  Component: PropTypes.func,
  timeout: PropTypes.number,
  className: PropTypes.string,
};
