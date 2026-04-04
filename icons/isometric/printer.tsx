import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Printer({
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
          d="M22.2979 18.9926V10.6969L15.5504 13.9685V22.4101L22.2979 18.9926Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M22.5 15L15.5 18.5" stroke={fill} />
        <path
          d="M4 15.5L11 19L12.5 18L12.3242 15.7534L8 13.5L4 15.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M22.0146 10.5524L16.9846 10.9507L17.8567 8.41135L22.0146 10.5524Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M15.4999 14.0001L22.1665 10.6667" stroke={fill} />
        <path
          d="M2.5 16V8.17705C2.5 7.60889 2.821 7.0895 3.32918 6.83541L8.32917 4.33542C8.75147 4.12427 9.24853 4.12427 9.67083 4.33542L10.7689 4.88446M17.7637 8.3819L21.6708 10.3354C22.179 10.5895 22.5 11.1089 22.5 11.6771L22.5 18.073C22.5 18.6411 22.179 19.1605 21.6708 19.4146L16.1708 22.1646C15.7485 22.3758 15.2515 22.3758 14.8292 22.1646L9.49998 19.5"
          stroke={fill}
        />
        <path d="M15.5 22.5V14L2.5 7.5" stroke={fill} />
        <path
          d="M12.5 21V16.6771C12.5 16.1089 12.179 15.5895 11.6708 15.3354L5.58541 12.2927C5.08673 12.0434 4.5 12.406 4.5 12.9635V15"
          stroke={fill}
        />
        <path d="M7 7.5L7.875 7.9375" stroke={fill} strokeLinecap="round" />
        <path
          d="M11.6354 2.09384L10.0274 6.91772C10.0117 6.96493 10.0331 7.01653 10.0776 7.03879L13.5 8.75L16.8969 10.4484C16.9513 10.4757 17.0172 10.4483 17.0365 10.3906L18.5886 5.73418C18.8247 5.02601 18.5041 4.25203 17.8364 3.9182L13.0313 1.51564C12.487 1.24349 11.8278 1.51652 11.6354 2.09384Z"
          stroke={fill}
        />
        <path
          d="M12.5 18L7.67082 20.4146C7.24853 20.6257 6.75147 20.6257 6.32918 20.4146L1.78497 18.1425C1.04864 17.7743 1.04772 16.7238 1.78341 16.3544L7.63262 13.4171"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default Printer;
