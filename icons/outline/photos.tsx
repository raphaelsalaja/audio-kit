import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Photos({
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
          d="M11.221,3.638c.879-.635,2.114-.556,2.906,.235h0c.792,.792,.87,2.026,.235,2.906"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.362,11.221c.635,.879,.556,2.114-.235,2.906h0c-.792,.792-2.026,.87-2.906,.235"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.779,14.362c-.879,.635-2.114,.556-2.906-.235h0c-.792-.792-.87-2.026-.235-2.906"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.638,6.779c-.635-.879-.556-2.114,.235-2.906h0c.792-.792,2.026-.87,2.906-.235"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <rect
          height="6"
          width="4.5"
          fill="none"
          rx="2.25"
          ry="2.25"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="6.75"
          y="1.75"
        />
        <rect
          height="6"
          width="4.5"
          fill="none"
          rx="2.25"
          ry="2.25"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          transform="translate(22.25 -4.25) rotate(90)"
          x="11"
          y="6"
        />
        <rect
          height="6"
          width="4.5"
          fill="none"
          rx="2.25"
          ry="2.25"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          transform="translate(18 26.5) rotate(180)"
          x="6.75"
          y="10.25"
        />
        <rect
          height="6"
          width="4.5"
          fill="none"
          rx="2.25"
          ry="2.25"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          transform="translate(-4.25 13.75) rotate(-90)"
          x="2.5"
          y="6"
        />
      </g>
    </svg>
  );
}

export default Photos;
