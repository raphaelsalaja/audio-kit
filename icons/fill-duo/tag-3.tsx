import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Tag3({
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
          d="M10 16.6704C9.2959 16.6704 8.5918 16.4023 8.0557 15.8662L2.3057 10.1162C1.7862 9.5967 1.5 8.90621 1.5 8.17191V3.25C1.5 2.2852 2.2852 1.5 3.25 1.5H8.1719C8.9063 1.5 9.5967 1.78609 10.1162 2.30569L15.8662 8.05569C16.9385 9.12799 16.9385 10.8721 15.8662 11.9444L11.9443 15.8663C11.4082 16.4024 10.7041 16.6704 10 16.6704Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.99999 12.75C9.80809 12.75 9.61619 12.6768 9.46969 12.5303L7.46969 10.5303C7.17669 10.2373 7.17669 9.7627 7.46969 9.4698C7.76269 9.1769 8.23728 9.1768 8.53018 9.4698L10.5302 11.4698C10.8232 11.7628 10.8232 12.2374 10.5302 12.5303C10.3837 12.6768 10.1919 12.75 9.99999 12.75Z"
          fill={fill}
        />
        <path
          d="M12 10.75C11.8081 10.75 11.6162 10.6768 11.4697 10.5303L9.46969 8.53031C9.17669 8.23731 9.17669 7.7627 9.46969 7.4698C9.76269 7.1769 10.2373 7.1768 10.5302 7.4698L12.5302 9.4698C12.8232 9.7628 12.8232 10.2374 12.5302 10.5303C12.3837 10.6768 12.1919 10.75 12 10.75Z"
          fill={fill}
        />
        <path
          d="M6.25 7.5C6.94036 7.5 7.5 6.94036 7.5 6.25C7.5 5.55964 6.94036 5 6.25 5C5.55964 5 5 5.55964 5 6.25C5 6.94036 5.55964 7.5 6.25 7.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Tag3;
