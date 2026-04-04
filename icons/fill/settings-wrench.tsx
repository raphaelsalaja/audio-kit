import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SettingsWrench({
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
          d="m9,1C4.5889,1,1,4.5889,1,9c0,1.4954.42,2.8911,1.1371,4.0898.0441-.0659.0885-.1321.152-.1816l3.0256-2.3533c-.2025-.4783-.3146-1.0037-.3146-1.5549,0-2.2056,1.7939-4,4-4,.4088,0,.7955.0796,1.1672.1941l-1.7668,2.3557c-.2246.2988-.1943.7168.0693.9805l1,1c.1455.1455.3369.2197.5303.2197.1572,0,.3154-.0493.4502-.1499l2.3559-1.7668c.1143.3716.1939.7581.1939,1.1667,0,2.2056-1.7939,4-4,4-.5514,0-1.077-.1121-1.5553-.3147l-2.3529,3.0251c-.0496.064-.1158.1084-.1815.1526,1.1986.717,2.5944,1.137,4.0897,1.137,4.4111,0,8-3.5889,8-8S13.4111,1,9,1Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default SettingsWrench;
