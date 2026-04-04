import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Ruler({
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
          d="M11.298 2.1057L2.10561 11.2981C1.71508 11.6886 1.71508 12.3218 2.10561 12.7123L5.28759 15.8943C5.67811 16.2848 6.31127 16.2848 6.7018 15.8943L15.8942 6.70189C16.2847 6.31137 16.2847 5.6782 15.8942 5.28768L12.7122 2.1057C12.3217 1.71517 11.6885 1.71517 11.298 2.1057Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.26299 14.334L6.495 12.566"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.3766 12.2204L9.28992 11.1337"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.4902 10.1068L10.7222 8.33881"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12 5.5C12.414 5.5 12.75 5.164 12.75 4.75C12.75 4.336 12.414 4 12 4C11.586 4 11.25 4.336 11.25 4.75C11.25 5.164 11.586 5.5 12 5.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.298 2.10599L2.10599 11.2979C1.71499 11.689 1.71499 12.322 2.10599 12.712L5.28799 15.894C5.67799 16.285 6.31099 16.285 6.70199 15.894L15.894 6.702C16.285 6.3109 16.285 5.678 15.894 5.288L12.712 2.10599C12.322 1.71499 11.689 1.71499 11.298 2.10599Z"
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

export default Ruler;
