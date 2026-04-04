import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MagicWand({
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
          d="M10.2848 7.71509C10.5777 8.00798 10.5777 8.48285 10.2848 8.77575L3.03033 16.0303C2.73744 16.3232 2.26257 16.3232 1.96967 16.0303C1.67678 15.7374 1.67678 15.2626 1.96967 14.9697L9.22416 7.7151C9.51705 7.4222 9.99192 7.4222 10.2848 7.71509Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M8.46107 1.35443C8.70682 1.20911 9.01375 1.21591 9.25282 1.37198L11.7129 2.97802L14.4307 1.86324C14.6948 1.75491 14.9975 1.80589 15.2115 1.99476C15.4256 2.18362 15.5139 2.47762 15.4393 2.75315L14.6715 5.58842L16.5718 7.82736C16.7566 8.04502 16.8017 8.34869 16.6883 8.61068C16.5748 8.87267 16.3225 9.04754 16.0374 9.06175L13.1043 9.20796L11.5614 11.7079C11.4114 11.9509 11.1365 12.0876 10.8523 12.0607C10.5681 12.0337 10.3238 11.8477 10.2222 11.5809L9.17692 8.83617L6.3228 8.14209C6.04541 8.07463 5.83037 7.85555 5.76809 7.57695C5.70581 7.29835 5.8071 7.00855 6.02936 6.8294L8.31689 4.98559L8.09497 2.05666C8.0734 1.77198 8.21533 1.49975 8.46107 1.35443Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MagicWand;
