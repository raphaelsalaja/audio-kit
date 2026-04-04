import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextColor2({
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
          d="M13.5 8.85284C13.7009 8.85284 13.891 8.94382 14.017 9.10027C14.2636 9.40651 14.5299 9.68546 14.8104 9.97806L14.83 9.99851L14.83 9.99851C15.098 10.278 15.3833 10.5756 15.637 10.8941C16.174 11.5685 16.5975 12.3716 16.5975 13.4902C16.5975 15.2095 15.2123 16.5966 13.5 16.5966C11.7877 16.5966 10.4025 15.2095 10.4025 13.4902C10.4025 12.3716 10.826 11.5685 11.363 10.8941C11.6167 10.5756 11.902 10.278 12.17 9.99852L12.17 9.99851L12.1896 9.97806C12.4701 9.68546 12.7364 9.40651 12.983 9.10027C13.109 8.94382 13.2991 8.85284 13.5 8.85284Z"
          fill={fill}
        />
        <path
          d="M7.59899 2C7.28945 2 7.0117 2.19017 6.89976 2.47875L2.05076 14.9788C1.90095 15.3649 2.09257 15.7994 2.47874 15.9492C2.86492 16.099 3.29942 15.9074 3.44922 15.5212L4.62122 12.5H7.97099C8.38521 12.5 8.72099 12.1642 8.72099 11.75C8.72099 11.3358 8.38521 11 7.97099 11H5.2031L7.99992 3.79023L9.71621 8.21669C9.86595 8.60289 10.3004 8.79458 10.6866 8.64484C11.0728 8.49509 11.2645 8.06063 11.1148 7.67443L9.10026 2.47887C8.98835 2.19022 8.71057 2 8.40099 2H7.59899Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default TextColor2;
