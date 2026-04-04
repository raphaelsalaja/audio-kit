import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Paragraph({
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
          d="M10.6616 7.06004L8.99825 5.90642C7.91536 5.83853 6.53527 6.21746 5.98819 7.77764C5.44111 9.33782 7.0013 10.6954 7.62942 11.1412C8.13192 11.4978 8.73346 11.8778 8.97142 12.0233C9.53481 12.3094 11.2969 11.8098 11.8152 10.816C12.6906 9.13771 11.4307 7.62343 10.6616 7.06004Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.067 3.317C11.067 2.176 10.142 1.25 9 1.25C7.858 1.25 6.933 2.175 6.933 3.317C6.933 4.459 7.45 4.867 9 5.9C10.359 6.806 12.1 7.967 12.1 9.517C12.1 11.229 10.712 12.1 9 12.1"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.933 14.683C6.933 15.824 7.858 16.75 9 16.75C10.142 16.75 11.067 15.825 11.067 14.683C11.067 13.541 10.36 13.006 9 12.1C7.45 11.067 5.9 10.033 5.9 8.483C5.9 6.771 7.288 5.9 9 5.9"
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

export default Paragraph;
