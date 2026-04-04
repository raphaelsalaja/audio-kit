import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseBolt({
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
          d="M7.94127 1.3628C8.56694 0.88743 9.4333 0.886554 10.0591 1.36311L15.3088 5.35286C15.7448 5.68397 16 6.20006 16 6.74598V14.25C16 15.7692 14.7692 17 13.25 17H4.75C3.23079 17 2 15.7692 2 14.25V6.74598C2 6.19865 2.2559 5.68344 2.69155 5.35258L7.94127 1.3628ZM9.71149 7.23726C9.83199 6.87587 9.66244 6.48156 9.31725 6.32041C8.97207 6.15927 8.56091 6.2825 8.36126 6.60694L6.36126 9.85694C6.21885 10.0883 6.21274 10.3787 6.34528 10.6159C6.47783 10.8531 6.72829 11 7 11H8.87631L8.28851 12.7628C8.16801 13.1241 8.33756 13.5185 8.68275 13.6796C9.02793 13.8407 9.43909 13.7175 9.63874 13.3931L11.6387 10.1431C11.7811 9.91168 11.7873 9.62135 11.6547 9.38416C11.5222 9.14697 11.2717 9.00001 11 9.00001H9.12369L9.71149 7.23726Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default HouseBolt;
