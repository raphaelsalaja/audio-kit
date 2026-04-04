import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pos2({
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
          d="m14.5,17v-1.5005c0-.1539.0355-.3056.1037-.4435l.5425-1.0963c.0682-.1379.1037-.2897.1037-.4435v-3.2661c0-1.1046-.8954-2-2-2h-4.25s-4.25,0-4.25,0c-1.1046,0-2,.8954-2,2v3.2661c0,.1539.0355.3056.1037.4435l.5425,1.0963c.0682.1379.1037.2897.1037.4435v1.5005h11Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m14.5,16.25v-.7505c0-.1539.0355-.3056.1037-.4435l.5425-1.0963c.0682-.1379.1037-.2897.1037-.4435v-3.2661c0-1.1046-.8954-2-2-2h-4.25s-4.25,0-4.25,0c-1.1046,0-2,.8954-2,2v3.2661c0,.1539.0355.3056.1037.4435l.5425,1.0963c.0682.1379.1037.2897.1037.4435v.7505"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m12.25,11.25h-6.5v2h6.5v-2Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m4.75,5.75v-2.5c0-.8284.6716-1.5,1.5-1.5h5.5c.8284,0,1.5.6716,1.5,1.5v2.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m10.25,5.75V1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m6.25,16.5c.4142,0,.75-.336.75-.75s-.3358-.75-.75-.75-.75.336-.75.75.3358.75.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m9,16.5c.4142,0,.75-.336.75-.75s-.3358-.75-.75-.75-.75.336-.75.75.3358.75.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m11.75,16.5c.4142,0,.75-.336.75-.75s-.3358-.75-.75-.75-.75.336-.75.75.3358.75.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Pos2;
