import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LaptopVideo({
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
          d="M6.57524 2C6.52591 2.2424 6.5 2.49324 6.5 2.75004V4.25004C6.5 6.31845 8.18066 8.00004 10.25 8.00004H12.75C13.8937 8.00004 14.9082 7.48788 15.5911 6.68643L16.0887 6.98476C16.2205 7.0645 16.3584 7.12942 16.5 7.17963V12.75C16.5 14.2692 15.2692 15.5 13.75 15.5H4.25C2.73079 15.5 1.5 14.2692 1.5 12.75V4.75C1.5 3.23079 2.73079 2 4.25 2H6.57524Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M0 14.75C0 14.3358 0.335786 14 0.75 14H17.25C17.6642 14 18 14.3358 18 14.75C18 15.1642 17.6642 15.5 17.25 15.5H0.75C0.335786 15.5 0 15.1642 0 14.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M17.6187 1.28814C17.3843 1.15534 17.0938 1.15924 16.8643 1.29884L14.9683 2.43594C14.8138 1.34504 13.8832 0.499939 12.75 0.499939H10.25C9.0093 0.500039 8 1.50984 8 2.75004V4.25004C8 5.49024 9.0093 6.50004 10.25 6.50004H12.75C13.8832 6.50004 14.8138 5.65494 14.9683 4.56404L16.8633 5.70024C16.982 5.77254 17.1162 5.80864 17.2505 5.80864C17.3775 5.80864 17.5044 5.77644 17.6187 5.71194C17.8541 5.57914 18 5.32914 18 5.05864V1.94144C18 1.67094 17.854 1.42094 17.6187 1.28814Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default LaptopVideo;
