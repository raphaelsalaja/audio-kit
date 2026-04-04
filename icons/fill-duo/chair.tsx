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
          d="M13.5 9.85887C12.1786 9.65041 10.6671 9.50598 9.00007 9.50598C7.74064 9.50598 6.21446 9.58833 4.5 9.85883V3.75C4.5 2.23079 5.73079 1 7.25 1H10.75C12.2692 1 13.5 2.23079 13.5 3.75V9.85887Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9.75 12.75C9.75 12.3358 9.41421 12 9 12C8.58579 12 8.25 12.3358 8.25 12.75V15.5H5.75C5.33579 15.5 5 15.8358 5 16.25C5 16.6642 5.33579 17 5.75 17H9H12.25C12.6642 17 13 16.6642 13 16.25C13 15.8358 12.6642 15.5 12.25 15.5H9.75V12.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3.24417 6.65698C3.19279 6.24596 2.81795 5.95442 2.40693 6.00579C1.99592 6.05717 1.70437 6.43201 1.75575 6.84303L2.28676 11.0912C2.4589 12.4672 3.62869 13.5 5.01556 13.5H12.9844C14.3713 13.5 15.5412 12.4674 15.7133 11.0911L16.2443 6.84303C16.2956 6.43201 16.0041 6.05717 15.5931 6.00579C15.1821 5.95442 14.8072 6.24596 14.7558 6.65698L14.3951 9.54295C12.9014 9.24273 11.078 9.00598 8.99996 9.00598C7.53606 9.00598 5.692 9.12333 3.6049 9.54291L3.24417 6.65698Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Chair;
