import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Chair({
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
          d="M9 12C9.41421 12 9.75 12.3358 9.75 12.75V16.25C9.75 16.6642 9.41421 17 9 17C8.58579 17 8.25 16.6642 8.25 16.25V12.75C8.25 12.3358 8.58579 12 9 12Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5 16.25C5 15.8358 5.33579 15.5 5.75 15.5H12.25C12.6642 15.5 13 15.8358 13 16.25C13 16.6642 12.6642 17 12.25 17H5.75C5.33579 17 5 16.6642 5 16.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M3.2441 6.65698C3.19273 6.24596 2.81789 5.95442 2.40687 6.00579C1.99586 6.05717 1.70431 6.43201 1.75569 6.84303L2.2867 11.0912C2.45884 12.4672 3.62863 13.5 5.0155 13.5H12.9844C14.3713 13.5 15.5412 12.4674 15.7132 11.0911C15.8902 9.6751 16.0672 8.25909 16.2442 6.84303C16.2956 6.43201 16.004 6.05717 15.593 6.00579C15.182 5.95442 14.8072 6.24596 14.7558 6.65698L14.3951 9.54293C12.9014 9.24273 11.078 9.006 9.00001 9.006C7.53608 9.006 5.69198 9.12335 3.60484 9.54294L3.2441 6.65698Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4.5 7.85883V3.75C4.5 2.23079 5.73079 1 7.25 1H10.75C12.2692 1 13.5 2.23079 13.5 3.75V7.85888C12.1786 7.65042 10.6671 7.506 9.00001 7.506C7.74058 7.506 6.21443 7.58834 4.5 7.85883Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Chair;
