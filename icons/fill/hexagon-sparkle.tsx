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
          d="m14.6289,4.1479l-4.25-2.4648c-.8516-.4932-1.9082-.4932-2.7598,0l-4.25,2.4653c-.8447.4907-1.3701,1.4023-1.3701,2.3784v4.9463c0,.9761.5254,1.8877,1.3711,2.3789l4.25,2.4648c.4258.2466.9023.3701,1.3799.3696.4775,0,.9541-.123,1.3799-.3696l4.251-2.4653c.8467-.4917,1.3711-1.4038,1.3682-2.3804v-4.9443c0-.9766-.5244-1.8877-1.3701-2.3789Zm-2.0389,4.4038l-1.515.5095-.505,1.5256c-.083.2468-.312.4131-.57.4131s-.488-.1663-.57-.4131l-.505-1.5256-1.515-.5095c-.2451-.0815-.41-.3135-.41-.5732s.165-.4915.41-.573l1.515-.5095.505-1.5259c.164-.4937.975-.4937,1.139,0l.505,1.5259,1.515.5095c.245.0825.411.3132.411.573s-.165.4917-.41.5732Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default HexagonSparkle;
