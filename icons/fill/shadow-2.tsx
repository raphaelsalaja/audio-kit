import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Shadow2({
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
          d="M11.873,5.071c.237,.598,.377,1.246,.377,1.929,0,2.899-2.35,5.25-5.25,5.25-.683,0-1.331-.14-1.929-.377,.425,2.895,2.918,5.127,5.929,5.127,3.309,0,6-2.691,6-6,0-3.011-2.232-5.504-5.127-5.929Z"
          fill={secondaryfill}
        />
        <path
          d="M7,13c-3.309,0-6-2.691-6-6S3.691,1,7,1s6,2.691,6,6-2.691,6-6,6Zm0-10.5c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5,4.5-2.019,4.5-4.5S9.481,2.5,7,2.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Shadow2;
