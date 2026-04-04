import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SunHaze({
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
          d="M1 13.25C1 12.8358 1.33579 12.5 1.75 12.5H11.25C11.6642 12.5 12 12.8358 12 13.25C12 13.6642 11.6642 14 11.25 14H1.75C1.33579 14 1 13.6642 1 13.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8 16.25C8 15.8358 8.33579 15.5 8.75 15.5H14.25C14.6642 15.5 15 15.8358 15 16.25C15 16.6642 14.6642 17 14.25 17H8.75C8.33579 17 8 16.6642 8 16.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13.5 13.25C13.5 12.8358 13.8358 12.5 14.25 12.5H16.25C16.6642 12.5 17 12.8358 17 13.25C17 13.6642 16.6642 14 16.25 14H14.25C13.8358 14 13.5 13.6642 13.5 13.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M3 16.25C3 15.8358 3.33579 15.5 3.75 15.5H5.75C6.16421 15.5 6.5 15.8358 6.5 16.25C6.5 16.6642 6.16421 17 5.75 17H3.75C3.33579 17 3 16.6642 3 16.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4 8.75C4 5.98879 6.23879 3.75 9 3.75C11.7612 3.75 14 5.98879 14 8.75C14 9.34256 13.8967 9.97464 13.7055 10.5045C13.5982 10.8018 13.3161 11 13 11H9H5C4.68393 11 4.40178 10.8018 4.29451 10.5045C4.10333 9.97464 4 9.34256 4 8.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 0.5C9.41421 0.5 9.75 0.835786 9.75 1.25V2.25C9.75 2.66421 9.41421 3 9 3C8.58579 3 8.25 2.66421 8.25 2.25V1.25C8.25 0.835786 8.58579 0.5 9 0.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M15.0103 2.73967C15.3032 3.03256 15.3032 3.50743 15.0103 3.80033L14.3033 4.50734C14.0105 4.80023 13.5356 4.80024 13.2427 4.50734C12.9498 4.21445 12.9498 3.73958 13.2427 3.44668L13.9497 2.73967C14.2426 2.44678 14.7174 2.44678 15.0103 2.73967Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M15 8.75C15 8.33579 15.3358 8 15.75 8H16.75C17.1642 8 17.5 8.33579 17.5 8.75C17.5 9.16421 17.1642 9.5 16.75 9.5H15.75C15.3358 9.5 15 9.16421 15 8.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2.98966 2.73967C3.28256 2.44678 3.75743 2.44678 4.05032 2.73967L4.75732 3.44668C5.05021 3.73958 5.05021 4.21445 4.75732 4.50734C4.46442 4.80024 3.98955 4.80023 3.69666 4.50734L2.98966 3.80033C2.69676 3.50743 2.69677 3.03256 2.98966 2.73967Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M0.5 8.75C0.5 8.33579 0.835786 8 1.25 8H2.25C2.66421 8 3 8.33579 3 8.75C3 9.16421 2.66421 9.5 2.25 9.5H1.25C0.835786 9.5 0.5 9.16421 0.5 8.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SunHaze;
