import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AlbumAdd({
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
          d="M11.8123 22.2979L8.59231 15.8564L12.0001 18.5651L11.8123 22.2979Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M19 18.5V10L22 8.5V17L19 18.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M12 22.5V14L15 12.5V21L12 22.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M15 12.5L12 14" stroke={fill} />
        <path d="M19 10.0001L21.7037 8.64819" stroke={fill} />
        <path d="M2 9L12 14V22.3107" stroke={fill} />
        <path d="M9 5L19 10V18.2766" stroke={fill} />
        <path d="M8 15L11.5941 22.1824" stroke={fill} />
        <path
          d="M4 18.5L7.89278 15.058C7.93031 15.0248 7.98661 15.0245 8.02448 15.0573L12 18.5"
          stroke={fill}
        />
        <path
          d="M3.98241 13.0089C4.00697 12.4415 4.42836 12.2013 4.92362 12.4725C5.41887 12.7437 5.80046 13.4236 5.7759 13.9911C5.75135 14.5586 5.32996 14.7987 4.8347 14.5275C4.33944 14.2563 3.95786 13.5764 3.98241 13.0089Z"
          fill={fill}
        />
        <path
          d="M4 3L1.75 1.875M4 3L6.25 4.125M4 3V0.75M4 3V5.25"
          stroke={fill}
          strokeLinecap="round"
        />
        <path
          d="M15 16.5L18.3292 18.1646C18.7515 18.3758 19.2485 18.3758 19.6708 18.1646L21.4472 17.2764C21.786 17.107 22 16.7608 22 16.382V9.11803C22 8.73926 21.786 8.393 21.4472 8.22361L12.6708 3.83541C12.2485 3.62426 11.7515 3.62426 11.3292 3.83541L9.55279 4.72361C9.214 4.893 9 5.23926 9 5.61803V9.5"
          stroke={fill}
        />
        <path
          d="M2 16.573V9.61803C2 9.23926 2.214 8.893 2.55279 8.72361L4.32918 7.83541C4.75147 7.62426 5.24853 7.62426 5.67082 7.83541L14.4472 12.2236C14.786 12.393 15 12.7393 15 13.118V20.382C15 20.7608 14.786 21.107 14.4472 21.2764L12.6708 22.1646C12.2485 22.3758 11.7515 22.3758 11.3292 22.1646L2.82918 17.9146C2.321 17.6605 2 17.1411 2 16.573Z"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default AlbumAdd;
