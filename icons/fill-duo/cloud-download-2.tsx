import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloudDownload2({
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
          d="M14.146 4.32703C13.704 1.86403 11.535 0 9 0C6.105 0 3.75 2.355 3.75 5.25C3.75 5.378 3.755 5.50801 3.767 5.64001C2.163 6.07101 1 7.525 1 9.25C1 11.318 2.682 13 4.75 13H12.5C14.981 13 17 10.981 17 8.5C17 6.646 15.85 4.99703 14.146 4.32703Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.7803 14.4697C11.4873 14.1767 11.0127 14.1767 10.7198 14.4697L9.75009 15.4394V8.74988C9.75009 8.33578 9.41419 7.99988 9.00009 7.99988C8.58599 7.99988 8.25009 8.33578 8.25009 8.74988V15.4394L7.2804 14.4697C6.9874 14.1767 6.5128 14.1767 6.2199 14.4697C5.927 14.7627 5.9269 15.2373 6.2199 15.5302L8.4699 17.7802C8.6164 17.9267 8.80829 17.9999 9.00019 17.9999C9.19209 17.9999 9.384 17.9267 9.5305 17.7802L11.7805 15.5302C12.0735 15.2372 12.0733 14.7626 11.7803 14.4697Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CloudDownload2;
