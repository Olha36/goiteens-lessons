import { PropTypes } from 'prop-types';

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
export default function Section({ title }) {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
}
