import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import ListTile, { ListDetail } from "../UIControls/ListTile";

const useStyles = createUseStyles({
  m_b_zero: {
    marginBottom: "0 !important",
  },
});

/**
 * ClientCard component
 *
 * @param {string} props.onSelect -
 * @param {number} props.accumValue -
 * @param {string} props.company -
 * @param {string} props.issueDate -
 * @param {string} props.ownerName -
 * @param {number} props.policyNumber -
 * @param {string} props.status -
 *
 * @returns {ReactElement} <div>
 */
export const ListCycleManagementComponent = ({
  onSelect,
  accumValue,
  company,
  issueDate,
  ownerName,
  cycleName,
  status,
}) => {
  const styles = useStyles();
  return (
    <ListTile>
      <>
     {/*} <ListDetail
          details={[
            <Checkbox
              policyNumber={policyNumber}
              onChange={(e) => {
                onSelect(e, policyNumber);
              }}
            />,
          ]}
        /> */}
        <ListDetail
          details={[
            <b>{ownerName}</b>,
            <p className={styles.m_b_zero}>{cycleName}</p>,
          ]}
        />
        <ListDetail leftAlign details={[<b>{company}</b>]} />
        <ListDetail
          leftAlign
          details={[
            <p className={styles.m_b_zero}>Issue Date</p>,
            <b>
              {new Date(issueDate).toLocaleDateString("en", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </b>,
          ]}
        />
        <ListDetail
          leftAlign
          details={[
            <p className={styles.m_b_zero}>Tax Status</p>,
            <b>{status}</b>,
          ]}
        />
        <ListDetail
          leftAlign
          flexGrow={4}
          details={[
            <p className={styles.m_b_zero}>Accumulation Value</p>,
            <b>${accumValue}</b>,
          ]}
        />
      </>
    </ListTile>
  );
};

ListCycleManagementComponent.propTypes = {
  data: PropTypes.any,
  accumValue: PropTypes.number,
  company: PropTypes.string,
  issueDate: PropTypes.any,
  ownerName: PropTypes.string,
  policyNumber: PropTypes.any,
  taxStatus: PropTypes.any,
};

export default ListCycleManagementComponent;