import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextASparkle({
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
          d="M5.108 11.75H12.892"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 15.25L9.401 2.75H8.599L5.108 11.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.493 1.492L14.547 1.177L14.231 0.230004C14.129 -0.0759965 13.622 -0.0759965 13.52 0.230004L13.204 1.177L12.258 1.492C12.105 1.543 12.001 1.686 12.001 1.848C12.001 2.01 12.105 2.153 12.258 2.204L13.204 2.519L13.52 3.466C13.571 3.619 13.714 3.722 13.875 3.722C14.036 3.722 14.18 3.618 14.23 3.466L14.546 2.519L15.492 2.204C15.645 2.153 15.749 2.01 15.749 1.848C15.749 1.686 15.645 1.543 15.492 1.492H15.493Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M4.65799 13.526L3.39499 13.105L2.97399 11.842C2.83699 11.434 2.16199 11.434 2.02499 11.842L1.60399 13.105L0.340993 13.526C0.136993 13.594 -0.00100708 13.785 -0.00100708 14C-0.00100708 14.215 0.136993 14.406 0.340993 14.474L1.60399 14.895L2.02499 16.158C2.09299 16.362 2.28499 16.5 2.49999 16.5C2.71499 16.5 2.90599 16.362 2.97499 16.158L3.39599 14.895L4.65899 14.474C4.86299 14.406 5.00099 14.215 5.00099 14C5.00099 13.785 4.86199 13.594 4.65799 13.526Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.75 6C3.16421 6 3.5 5.66421 3.5 5.25C3.5 4.83579 3.16421 4.5 2.75 4.5C2.33579 4.5 2 4.83579 2 5.25C2 5.66421 2.33579 6 2.75 6Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default TextASparkle;
