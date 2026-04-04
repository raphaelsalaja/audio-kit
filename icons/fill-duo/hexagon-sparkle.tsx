import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HexagonSparkle({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m14.6289,4.1479l-4.25-2.4648c-.8516-.4932-1.9082-.4932-2.7598,0l-4.25,2.4653c-.8447.4907-1.3701,1.4023-1.3701,2.3784v4.9463c0,.9761.5254,1.8877,1.3711,2.3789l4.25,2.4648c.4258.2466.9023.3701,1.3799.3696.4775,0,.9541-.123,1.3799-.3696l4.251-2.4653c.8467-.4917,1.3711-1.4038,1.3682-2.3804v-4.9443c0-.9766-.5244-1.8877-1.3701-2.3789Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m12.589,7.4055l-1.515-.5096-.505-1.5258c-.164-.4935-.975-.4935-1.139,0l-.505,1.5258-1.515.5096c-.245.0816-.41.3132-.41.5731s.165.4915.41.5731l1.515.5096.505,1.5258c.082.2467.312.4129.57.4129s.487-.1662.57-.4129l.505-1.5258,1.515-.5096c.245-.0816.41-.3132.41-.5731s-.166-.4905-.411-.5731Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default HexagonSparkle;
