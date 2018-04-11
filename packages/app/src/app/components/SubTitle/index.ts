import styled from 'app/styled-components';
import delayEffect from 'common/utils/animation/delay-effect';

export default styled<
  {
    delay?: number;
  },
  'h2'
>('h2')`
  ${props => props.delay != null && delayEffect(props.delay || 0)};
  text-align: center;
  width: 100%;
  font-size: 1.75rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 1.5rem;
  line-height: 1.4;
`;