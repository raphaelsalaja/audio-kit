import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Note3({
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
          d="m10.25,11.25c0-.5522.4477-1,1-1h3.9675c.0181-.1082.0325-.2173.0325-.3284v-5.1716c0-1.1045-.8954-2-2-2H4.75c-1.1046,0-2,.8955-2,2v8.5c0,1.1045.8954,2,2,2h5.1716c.1111,0,.2203-.0144.3284-.0325v-3.9675Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m4.75,2.75h8.5c1.1046,0,2,.8954,2,2v5.1716c0,.5304-.2107,1.0391-.5858,1.4142l-3.3284,3.3284c-.3751.3751-.8838.5858-1.4142.5858h-5.1716c-1.1046,0-2-.8954-2-2V4.75c0-1.1046.8954-2,2-2Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m10.25,15.148v-3.898c0-.552.448-1,1-1h3.91"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="7.25"
          x2="5.75"
          y1="11.75"
          y2="11.75"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="8"
          x2="5.75"
          y1="9"
          y2="9"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="12.25"
          x2="5.75"
          y1="6.25"
          y2="6.25"
        />
      </g>
    </svg>
  );
}

export default Note3;
