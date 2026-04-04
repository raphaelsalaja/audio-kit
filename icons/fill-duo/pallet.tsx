import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pallet({
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
          d="M2.4361 3.77558C2.64871 3.02106 3.33706 2.5 4.12079 2.5H13.879C14.663 2.5 15.3513 3.02124 15.564 3.77568L17.4719 10.5466C17.5356 10.7726 17.4897 11.0155 17.3479 11.2027C17.2062 11.39 16.9849 11.5 16.75 11.5H1.25C1.01514 11.5 0.793833 11.39 0.652059 11.2027C0.510285 11.0155 0.464411 10.7726 0.528112 10.5466L2.4361 3.77558Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.5 13V14.25C11.5 14.9403 10.9403 15.5 10.25 15.5H7.75C7.05969 15.5 6.5 14.9403 6.5 14.25V13H11.5Z"
          fill={fill}
        />
        <path d="M5.832 4H4.31661L3.45501 10H4.9704L5.832 4Z" fill={fill} />
        <path d="M9.75 10H8.25V4H9.75V10Z" fill={fill} />
        <path
          d="M4.11623 11.5H4.09566C4.10253 11.5001 4.10939 11.5001 4.11623 11.5Z"
          fill={fill}
        />
        <path
          d="M13.9043 11.5H13.8838C13.8906 11.5001 13.8975 11.5001 13.9043 11.5Z"
          fill={fill}
        />
        <path d="M14.545 10H13.0296L12.168 4H13.6834L14.545 10Z" fill={fill} />
        <path
          d="M12.8324 2.5C12.8235 2.49984 12.8144 2.49984 12.8054 2.5H12.8324Z"
          fill={fill}
        />
        <path
          d="M9.00628 2.5C9.00418 2.49998 9.00209 2.49997 9 2.49997C8.9979 2.49997 8.99581 2.49998 8.99372 2.5H9.00628Z"
          fill={fill}
        />
        <path
          d="M5.19459 2.5C5.18555 2.49984 5.17653 2.49984 5.16755 2.5H5.19459Z"
          fill={fill}
        />
        <path
          d="M0.5 13V14.25C0.5 14.9403 1.05969 15.5 1.75 15.5H3.75C4.44031 15.5 5 14.9403 5 14.25V13H2V13H0.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.75 13V14.25C12.75 14.9403 13.3097 15.5 14 15.5H16.25C16.9403 15.5 17.5 14.9403 17.5 14.25V13H16H12.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Pallet;
