import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloudSnow({
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
          d="M13.464 7.141C13.278 4.827 11.362 3 9 3C6.515 3 4.5 5.015 4.5 7.5C4.5 7.85 4.549 8.186 4.624 8.513C3.027 8.58 1.75 9.887 1.75 11.5C1.75 12.7853 2.55804 13.8817 3.69389 14.3089L4.49452 13.8324C4.24912 13.2148 4.27841 12.4951 4.63646 11.875C5.07902 11.1085 5.90449 10.7009 6.73176 10.7543C7.09911 10.0111 7.86487 9.5 8.75 9.5C9.63513 9.5 10.4009 10.0111 10.7682 10.7543C11.5955 10.7009 12.421 11.1085 12.8635 11.875C13.2151 12.484 13.2497 13.1891 13.0184 13.7991L13.9849 14.1945C15.3174 13.6193 16.25 12.2935 16.25 10.75C16.25 9.014 15.065 7.568 13.464 7.141Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.75 11.75V16.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.58499 13L10.915 15.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.58499 15.5L10.915 13"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.70499 8C10.392 7.233 11.389 6.75 12.5 6.75C12.833 6.75 13.157 6.809 13.464 6.891"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.7025 14.0454C15.1824 13.5434 16.25 12.1494 16.25 10.5C16.25 8.7639 15.065 7.3179 13.464 6.8911C13.278 4.5769 11.362 2.75 9 2.75C6.515 2.75 4.5 4.7651 4.5 7.25C4.5 7.6001 4.54899 7.936 4.62399 8.2629C3.02699 8.33 1.75 9.6369 1.75 11.25C1.75 12.5776 2.61659 13.6943 3.81189 14.0896"
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

export default CloudSnow;
