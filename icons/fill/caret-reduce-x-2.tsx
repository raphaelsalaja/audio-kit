import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretReduceX2({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m11.447,2.857c-.34-.17-.743-.134-1.049.096l-2.984,2.249c-.25.188-.398.487-.398.799s.148.611.398.799l2.985,2.249c.178.133.388.202.6.202.152,0,.306-.035.448-.106.341-.17.553-.513.553-.895V3.751c0-.381-.212-.724-.553-.895Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m1.601,2.952c-.306-.229-.708-.267-1.048-.095-.341.17-.553.513-.553.895v4.497c0,.381.212.724.553.895.143.071.296.106.448.106.212,0,.423-.068.601-.202l2.984-2.249c.25-.188.398-.487.398-.799s-.148-.611-.398-.799L1.601,2.952Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default CaretReduceX2;
