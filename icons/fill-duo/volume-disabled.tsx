import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function VolumeDisabled({
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
          d="M14 5C11.7908 5 10 6.79079 10 9C10 11.2092 11.7908 13 14 13C16.2092 13 18 11.2092 18 9C18 6.79079 16.2092 5 14 5ZM11.5 9C11.5 7.61921 12.6192 6.5 14 6.5C14.4172 6.5 14.8106 6.6022 15.1564 6.78293L11.7829 10.1564C11.6022 9.81061 11.5 9.41725 11.5 9ZM12.8436 11.2171C13.1894 11.3978 13.5828 11.5 14 11.5C15.3808 11.5 16.5 10.3808 16.5 9C16.5 8.58276 16.3978 8.18941 16.2171 7.8436L12.8436 11.2171Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12 2.664C12 1.67539 10.9072 1.07941 10.0759 1.61119L4.78056 5H2.25C1.00779 5 0 6.00778 0 7.25V10.75C0 11.9922 1.00779 13 2.25 13H4.78051L10.0759 16.3898C10.9072 16.9216 12 16.3256 12 15.337V14.1251C9.95129 13.325 8.5 11.3321 8.5 9C8.5 6.66795 9.95129 4.67496 12 3.87492V2.664Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default VolumeDisabled;
