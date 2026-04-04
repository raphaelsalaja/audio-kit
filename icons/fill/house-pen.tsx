import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HousePen({
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
          d="M17.3678 11.235L17.0324 10.8996C16.3722 10.238 15.2194 10.2385 14.5573 10.8991L11.3961 14.0602C11.3155 14.1408 11.2545 14.2384 11.2174 14.3458L10.2965 17.0167C10.2027 17.2882 10.2721 17.589 10.4752 17.7916C10.6183 17.9347 10.8097 18.0113 11.0055 18.0113C11.0875 18.0113 11.1701 17.9981 11.2501 17.9703L13.921 17.0494C14.0284 17.0123 14.1261 16.9513 14.2066 16.8707L17.3677 13.7096C17.6983 13.379 17.8804 12.9396 17.8804 12.4723C17.8804 12.0045 17.6984 11.5651 17.3678 11.235Z"
          fill={secondaryfill}
        />
        <path
          d="M7.94127 1.3628C8.56694 0.88743 9.4333 0.886554 10.0591 1.36311L15.3088 5.35286C15.7448 5.68397 16 6.20006 16 6.74598V8.9097C15.096 8.85493 14.1717 9.16487 13.4978 9.83725L10.3354 12.9995C10.094 13.2409 9.91092 13.5338 9.7996 13.8561L8.87872 16.5269C8.82515 16.6822 8.78938 16.8408 8.77081 17H4.75C3.23079 17 2 15.7692 2 14.25V6.74598C2 6.19865 2.2559 5.68344 2.69155 5.35258L7.94127 1.3628Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HousePen;
