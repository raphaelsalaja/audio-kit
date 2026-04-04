import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartUsage({
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
          d="M15.764 6.2788C16.1621 6.16472 16.5774 6.39505 16.6915 6.79325C16.8925 7.49503 17 8.23563 17 9C17 11.2797 16.0456 13.3364 14.5174 14.7929C14.2176 15.0787 13.7429 15.0673 13.4571 14.7674C13.1713 14.4676 13.1827 13.9929 13.4826 13.7071C14.7264 12.5216 15.5 10.8523 15.5 9C15.5 8.37677 15.4125 7.77517 15.2495 7.20635C15.1354 6.80815 15.3658 6.39287 15.764 6.2788Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 2.5C5.41021 2.5 2.5 5.41021 2.5 9C2.5 10.8523 3.27364 12.5216 4.51745 13.7071C4.81729 13.9929 4.82869 14.4676 4.54291 14.7674C4.25713 15.0673 3.78239 15.0787 3.48255 14.7929C1.95436 13.3364 1 11.2797 1 9C1 4.58179 4.58179 1 9 1C11.1383 1 13.0824 1.84048 14.5172 3.20689C14.8172 3.49255 14.8288 3.96728 14.5431 4.26723C14.2575 4.56718 13.7827 4.57877 13.4828 4.29311C12.3156 3.18152 10.7377 2.5 9 2.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7 8C7.552 8 8 7.552 8 7C8 6.448 7.552 6 7 6C6.448 6 6 6.448 6 7C6 7.552 6.448 8 7 8Z"
          fill={secondaryfill}
        />
        <path
          d="M11 12C11.552 12 12 11.552 12 11C12 10.448 11.552 10 11 10C10.448 10 10 10.448 10 11C10 11.552 10.448 12 11 12Z"
          fill={secondaryfill}
        />
        <path
          d="M11.4983 6.18944C11.8079 6.46462 11.8358 6.93868 11.5606 7.24827L7.56056 11.7483C7.28538 12.0579 6.81132 12.0857 6.50174 11.8105C6.19215 11.5354 6.16426 11.0613 6.43945 10.7517L10.4395 6.25172C10.7146 5.94213 11.1887 5.91425 11.4983 6.18944Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ChartUsage;
