import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Tag2({
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
          d="m8.172,2.25H3.25c-.552,0-1,.448-1,1v4.922c0,.53.211,1.039.586,1.414l5.75,5.75c.781.781,2.047.781,2.828,0l3.922-3.922c.781-.781.781-2.047,0-2.828l-5.75-5.75c-.375-.375-.884-.586-1.414-.586Zm-.422,4c0,.8284-.6716,1.5-1.5,1.5s-1.5-.6716-1.5-1.5.6716-1.5,1.5-1.5,1.5.6716,1.5,1.5Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m6.25,13l-3.414-3.414c-.375-.375-.586-.884-.586-1.414V3.25c0-.552.448-1,1-1h4.922c.53,0,1.039.211,1.414.586l5.75,5.75c.781.781.781,2.047,0,2.828l-3.922,3.922c-.5852.5852-1.4427.7319-2.1644.4401"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m6.25,7.75c.8284,0,1.5-.6716,1.5-1.5s-.6716-1.5-1.5-1.5-1.5.6716-1.5,1.5.6716,1.5,1.5,1.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m6.25,7.75v8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Tag2;
