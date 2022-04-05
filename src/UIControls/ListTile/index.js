import React from "react";
import PropTypes from "prop-types";
import useStyles from "./style";
/**
 * ListTile component
 *
 * @param {ReactElement} props.children - React children
 * @param {Array} [props.listTileClasses] - CSS classes to apply to the component
 *
 * @returns {ReactElement} <div>
 */
const ListTile = ({ children, listTileClasses = [] }) => {
  const styles = useStyles({});
  return (
    <div className={`${styles.listTile} ${listTileClasses.join(" ")}`}>
      {children}
    </div>
  );
};

ListTile.propTypes = {
  children: PropTypes.element,
  listTileClasses: PropTypes.arrayOf(PropTypes.string),
};

/**
 * ListDetail component
 *
 * @param {Array} [props.details] -
 * @param {object} props.rest -
 *
 * @returns {ReactElement} <div>
 */
export const ListDetail = ({ details = [], ...rest }) => {
  const styles = useStyles(rest);
  return <div className={styles.listDetail}>{details}</div>;
};

ListDetail.propTypes = {
  details: PropTypes.arrayOf(PropTypes.node),
};

export default ListTile;