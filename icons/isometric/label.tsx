import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Label({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path
          d="M11.021 19.3439V16.4324L21.967 10.9481V13.995L11.021 19.3439Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M1 11.5L6 14L11 16.5L22 11" stroke={fill} />
        <path
          d="M1.55279 11.2236L11.7185 6.14077C11.9041 6.04793 12.107 5.99465 12.3144 5.98428L21.2125 5.53937C21.6409 5.51795 22 5.85951 22 6.28844V13.382C22 13.7607 21.786 14.107 21.4472 14.2764L11.6708 19.1646C11.2485 19.3757 10.7515 19.3757 10.3292 19.1646L1.55279 14.7764C1.214 14.607 1 14.2607 1 13.882V12.118C1 11.7393 1.214 11.393 1.55279 11.2236Z"
          stroke={fill}
        />
        <path d="M11 19.5V16.5" stroke={fill} />
        <path
          d="M19.5425 8.24989C19.5425 8.7316 18.6313 9.1221 17.5073 9.1221C16.3833 9.1221 15.4722 8.7316 15.4722 8.24989C15.4722 7.76819 16.3833 7.37768 17.5073 7.37768C18.6313 7.37768 19.5425 7.76819 19.5425 8.24989Z"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default Label;
