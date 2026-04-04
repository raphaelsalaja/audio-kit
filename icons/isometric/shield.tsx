import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Shield({
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
          d="M17 16.5L10.5 13.5V22L13.5 21.5L16 20L17 16.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M4.29962 9.95421L4 4L10.5 5V13.5L4.29962 9.95421Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M10.5 5V21.7244" stroke={fill} />
        <path
          d="M6.82617 2.09131L3.99976 3.59253L7.06077 4.69502L10.5206 4.91785L13.1594 3.4401L10.1805 3.15863L6.82617 2.09131Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M20.1596 8.96973L17.1458 10.5311L16.7102 17.7205L15.4756 20.589L18.7798 18.3015L19.6513 16.5223L20.1596 8.96973Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M12.4127 21.7697C14.9126 21.6126 16.5642 19.6606 16.7674 16.6229L17.1825 10.4199L16.7867 10.1729C14.6547 8.84253 12.5799 7.11168 10.6619 5.06398C10.559 4.95422 10.4129 4.89606 10.2626 4.90237C8.36566 4.98196 6.31726 4.59759 4.21313 3.76636"
          stroke={fill}
          strokeMiterlimit="10"
        />
        <path
          d="M3.85878 4.27087L4.23247 10.2361C4.43574 13.4809 6.0873 17.1159 8.58719 19.8205L10.3386 21.7154C10.4407 21.8259 10.5871 21.8845 10.7372 21.8751L12.4127 21.7697C13.089 21.7272 13.7032 21.5534 14.2434 21.2622C18.6452 18.8898 19.5643 18.1606 19.7675 15.1229L20.1425 9.51775C20.1672 9.14966 19.9864 8.79896 19.6771 8.598C17.4323 7.13992 15.3911 5.4244 13.5646 3.45966C13.5237 3.4156 13.4651 3.39222 13.405 3.39548C11.2756 3.51117 9.212 3.01429 7.23404 2.27064C6.96807 2.17064 6.67223 2.18259 6.41808 2.30967L4.40961 3.31392C4.05057 3.49344 3.83368 3.87024 3.85878 4.27087Z"
          stroke={fill}
          strokeLinecap="square"
          strokeMiterlimit="10"
        />
        <path d="M17.1826 10.4661L20.1117 9.01282" stroke={fill} />
        <path d="M10.4138 4.92635L13.3429 3.47302" stroke={fill} />
        <path d="M4.21167 10.1058L16.7888 16.3944" stroke={fill} />
      </g>
    </svg>
  );
}

export default Shield;
