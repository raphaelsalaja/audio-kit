import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DataSettings({
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
          d="M12.8962 2.10441C13.2112 1.78953 13.7497 2.01198 13.7497 2.45793L13.5066 6.88078C13.2702 6.79616 13.0153 6.74992 12.7497 6.74992C11.8866 6.75003 11.1377 7.23672 10.7605 7.95012C10.0545 7.73296 9.26433 7.8693 8.66769 8.36223L8.50753 8.50773C7.89757 9.11777 7.71265 9.98955 7.94991 10.7607C7.23656 11.138 6.74975 11.8868 6.74972 12.7499C6.74972 13.0155 6.79597 13.2704 6.88058 13.5068L2.45675 13.7499C2.01196 13.7497 1.78842 13.2113 2.10323 12.8964L12.8962 2.10441Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.75 9V10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.4017 10.0983L14.5178 10.9822"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.5 12.75H15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.4017 15.4017L14.5178 14.5178"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 16.5V15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.0983 15.4017L10.9822 14.5178"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 12.75H10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.0983 10.0983L10.9822 10.9822"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 6.19481V2.45801C13.75 2.01201 13.211 1.78911 12.896 2.10401L2.103 12.896C1.788 13.2109 2.012 13.75 2.457 13.75H6.1948"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 15.25C14.1312 15.25 15.25 14.1307 15.25 12.75C15.25 11.3693 14.1312 10.25 12.75 10.25C11.3688 10.25 10.25 11.3693 10.25 12.75C10.25 14.1307 11.3688 15.25 12.75 15.25Z"
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

export default DataSettings;
