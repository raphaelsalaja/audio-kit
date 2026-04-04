import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DeliveryCar({
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
          d="M3 18V18.5784C3 19.2315 3.68733 19.6563 4.2715 19.3643C4.54184 19.2291 4.75189 19.0084 4.87554 18.7446"
          stroke={fill}
        />
        <path
          d="M8 20.5V17L12 15V18.5L8 20.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M14 17.5V10L22 6V13.5L14 17.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M12 16.5L13.3292 17.1646C13.7515 17.3757 14.2485 17.3757 14.6708 17.1646L21.4472 13.7764C21.786 13.607 22 13.2607 22 12.882V6.61803C22 6.23926 21.786 5.893 21.4472 5.72361L14.6708 2.33541C14.2485 2.12426 13.7515 2.12426 13.3292 2.33541L6.55279 5.72361C6.214 5.893 6 6.23926 6 6.61803V8.5"
          stroke={fill}
        />
        <path d="M22 6L14 10L10 8L6 6" stroke={fill} />
        <path
          d="M11.4472 11.2236L6 8.5L5.31672 8.84164C3.28401 9.85799 2 11.9356 2 14.2082V16.882C2 17.2607 2.214 17.607 2.55279 17.7764L7.32918 20.1646C7.75147 20.3757 8.24853 20.3757 8.67082 20.1646L11.4472 18.7764C11.786 18.607 12 18.2607 12 17.882V12.118C12 11.7393 11.786 11.393 11.4472 11.2236Z"
          stroke={fill}
        />
        <path d="M4 10L10 13" stroke={fill} />
        <path d="M2 14L8 17L12 15" stroke={fill} />
        <path
          d="M19 15V15.5784C19 16.2315 19.6873 16.6563 20.2715 16.3643C20.718 16.141 21 15.6847 21 15.1855V14"
          stroke={fill}
        />
        <path
          d="M9 20V20.5784C9 21.2315 9.68733 21.6563 10.2715 21.3643C10.718 21.141 11 20.6847 11 20.1855V19"
          stroke={fill}
        />
        <path d="M14 10V17.5" stroke={fill} />
        <path
          d="M8 20.5V17.2083C8 14.9356 9.28401 12.8581 11.3167 11.8417L12 11.5001"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default DeliveryCar;
