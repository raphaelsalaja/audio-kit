import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Garage({
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
          d="M9.37643 2.33312C9.16802 2.22991 8.92352 2.22924 8.71454 2.33128L2.42092 5.40436C2.16336 5.53012 2 5.79168 2 6.07831V13.25C2 14.7692 3.23079 16 4.75 16H13.25C14.7692 16 16 14.7692 16 13.25V6.07851C16 5.79339 15.8383 5.53292 15.5828 5.4064L9.37643 2.33312ZM5.5 11.75V13.25H12.5V11.75H5.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5.5 13.25V11.75H12.5V13.25H5.5Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path d="M12.5 13.25H5.5V16H12.5V13.25Z" fill={fill} />
        <path
          d="M6.25 9C5.83579 9 5.5 9.33579 5.5 9.75V11.75H12.5V9.75C12.5 9.33579 12.1642 9 11.75 9H6.25Z"
          fill={fill}
        />
        <path
          d="M8.67393 2.07459C8.87993 1.97514 9.12005 1.97514 9.32605 2.07459L16.5761 5.57459C16.9491 5.75467 17.1055 6.20304 16.9254 6.57606C16.7453 6.94908 16.2969 7.10549 15.9239 6.92541L8.99999 3.58282L2.07605 6.92541C1.70303 7.10549 1.25465 6.94908 1.07458 6.57606C0.894496 6.20304 1.05091 5.75467 1.42393 5.57459L8.67393 2.07459Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Garage;
