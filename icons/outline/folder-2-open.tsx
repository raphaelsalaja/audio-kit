import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Folder2Open({
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
          d="M5,14.75h-.75c-1.105,0-2-.895-2-2V4.75c0-1.105,.895-2,2-2h1.825c.587,0,1.144,.258,1.524,.705l1.524,1.795h4.626c1.105,0,2,.895,2,2v1"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.148,13.27l.843-3.13c.257-.953-.461-1.89-1.448-1.89H6.15c-.678,0-1.272,.455-1.448,1.11l-.942,3.5c-.257,.953,.461,1.89,1.448,1.89H14.217c.904,0,1.696-.607,1.931-1.48Z"
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

export default Folder2Open;
