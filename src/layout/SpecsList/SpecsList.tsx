import { Collapse } from "antd";
import { FC, useContext, useEffect } from "react";
import { SpecsCTX } from "../../contexts/SpecsListContext";
const { Panel } = Collapse;

const SpecsList: FC = () => {
  const specsList = useContext(SpecsCTX);

  return (
    <div className="w-5/12">
      <Collapse accordion>
        {specsList?.specsList.map((each) => (
          <Panel header={each.name} key={each.name}>
            {Object.entries(each).map(([fieldName, fieldValue]) => (
              <p>
                <b> {fieldName}</b>: {fieldValue?.toString?.()}
              </p>
            ))}
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default SpecsList;
