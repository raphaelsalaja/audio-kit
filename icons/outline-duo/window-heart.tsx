import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowHeart({
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
          d="m13.781,16.4468c.138.071.299.071.437,0,.729-.374,3.031-1.73,3.031-3.934.004-.968-.791-1.757-1.777-1.763-.593.007-1.144.301-1.473.786-.329-.484-.881-.778-1.473-.786-.985.006-1.78.794-1.777,1.763,0,2.205,2.303,3.56,3.031,3.934h.001Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m1.75,4.75c0-1.1046.8954-2,2-2h10.5c1.1046,0,2,.8954,2,2v3H1.75v-3Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m16.25,7.75v-3c0-1.104-.895-2-2-2H3.75c-1.105,0-2,.896-2,2v8.5c0,1.104.895,2,2,2h4.3357"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m13.781,16.447c.138.071.299.071.437,0,.729-.374,3.031-1.73,3.031-3.934.004-.968-.791-1.757-1.777-1.763-.593.007-1.144.301-1.473.786-.329-.484-.881-.778-1.473-.786-.985.006-1.78.794-1.777,1.763,0,2.205,2.303,3.56,3.031,3.934h.001Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="4.25" cy="5.25" fill={fill} r=".75" strokeWidth="0" />
        <circle cx="6.75" cy="5.25" fill={fill} r=".75" strokeWidth="0" />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="1.75"
          x2="16.25"
          y1="7.75"
          y2="7.75"
        />
      </g>
    </svg>
  );
}

export default WindowHeart;
