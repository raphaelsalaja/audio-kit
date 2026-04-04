import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Cubes({
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
          d="M4.648,8.086l-2.55,1.479c-.37,.215-.598,.61-.598,1.038v2.968c0,.428,.228,.823,.598,1.038l2.55,1.479c.372,.216,.832,.216,1.204,0l2.55-1.479c.37-.215,.598-.61,.598-1.038v-2.968c0-.428-.228-.823-.598-1.038l-2.55-1.479c-.372-.216-.832-.216-1.204,0Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.148,8.086l-2.55,1.479c-.37,.215-.598,.61-.598,1.038v2.968c0,.428,.228,.823,.598,1.038l2.55,1.479c.372,.216,.832,.216,1.204,0l2.55-1.479c.37-.215,.598-.61,.598-1.038v-2.968c0-.428-.228-.823-.598-1.038l-2.55-1.479c-.372-.216-.832-.216-1.204,0Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.398,1.586l-2.55,1.479c-.37,.215-.598,.61-.598,1.038v2.968c0,.428,.228,.823,.598,1.038l2.55,1.479c.372,.216,.832,.216,1.204,0l2.55-1.479c.37-.215,.598-.61,.598-1.038v-2.968c0-.428-.228-.823-.598-1.038l-2.55-1.479c-.372-.216-.832-.216-1.204,0Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="8.84 10.005 5.25 12.087 1.66 10.005"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="16.34 10.005 12.75 12.087 9.16 10.005"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="12.59 3.505 9 5.587 5.41 3.505"
          stroke={secondaryfill}
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
          x1="5.25"
          x2="5.25"
          y1="16.25"
          y2="12.087"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="12.75"
          x2="12.75"
          y1="16.25"
          y2="12.087"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9"
          x2="9"
          y1="9.75"
          y2="5.587"
        />
      </g>
    </svg>
  );
}

export default Cubes;
