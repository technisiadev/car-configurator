import { Collapse } from "antd";
import { FC, memo } from "react";

const { Panel } = Collapse;

interface Specs {
  name: string;
  engine: string;
  interior: string;
  color: string;
  rims: string;
  typeOfWheels: string;
  AirSuspension: boolean;
  signature: string;
  save(): void | string;
}

interface Props {
  spec: Specs;
}

const Accordion: FC<Props> = ({ spec }) => {
  return (
    <Panel header={spec.name} key={spec.name}>
      <p>{spec.engine}</p>
      <p>{spec.AirSuspension}</p>
    </Panel>
  );
};

export default memo(Accordion);
