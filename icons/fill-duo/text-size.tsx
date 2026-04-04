import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextSize({
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
          d="M12.955 3C12.6455 3 12.3677 3.19017 12.2558 3.47877L8.5708 12.9788C8.421 13.3649 8.61263 13.7994 8.99881 13.9492C9.38499 14.099 9.81948 13.9074 9.96928 13.5212L10.7533 11.5H15.7668L16.5508 13.5212C16.7006 13.9074 17.1351 14.099 17.5212 13.9492C17.9074 13.7994 18.0991 13.3649 17.9493 12.9788L14.2643 3.47877C14.1523 3.19017 13.8746 3 13.565 3H12.955ZM15.1849 10L13.26 5.03759L11.3351 10H15.1849Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M3.48001 6C3.17801 6 2.90547 6.18114 2.78853 6.45958L0.0585251 12.9596C-0.101872 13.3415 0.0776898 13.7811 0.459587 13.9415C0.841485 14.1019 1.2811 13.9223 1.4415 13.5404L1.87848 12.5H5.21755L5.65453 13.5404C5.81492 13.9223 6.25454 14.1019 6.63644 13.9415C7.01833 13.7811 7.1979 13.3415 7.0375 12.9596L4.3075 6.45958C4.19055 6.18114 3.91801 6 3.61601 6H3.48001ZM4.58755 11L3.54801 8.52492L2.50848 11H4.58755Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default TextSize;
