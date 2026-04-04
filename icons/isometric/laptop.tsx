import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Laptop({
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
          d="M18.5 5.43369V4.5L14.5 2.5V3.69098C14.5 3.88037 14.607 4.0535 14.7764 4.1382L17.9935 5.74674C18.2262 5.8631 18.5 5.69387 18.5 5.43369Z"
          fill={fill}
        />
        <path
          d="M21.3121 16.0002L22.0046 16.2549L22.0046 18.5709L12.5 23.3337L1.50001 17.8337V14.8337L12.5 20.3337L21.3121 16.0002Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M11.2236 17.8882L12.5528 17.2236C12.737 17.1315 12.737 16.8685 12.5528 16.7764L9.22361 15.1118C9.08284 15.0414 8.91716 15.0414 8.77639 15.1118L7.44721 15.7764C7.26295 15.8685 7.26295 16.1315 7.44721 16.2236L10.7764 17.8882C10.9172 17.9586 11.0828 17.9586 11.2236 17.8882Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M12.5 23.3251V20.5" stroke={fill} />
        <path d="M10.5 10.5L22 16.25" stroke={fill} strokeLinecap="round" />
        <path
          d="M21.5 16L12.9472 20.2764C12.6657 20.4172 12.3343 20.4172 12.0528 20.2764L1.5 15"
          stroke={fill}
        />
        <path
          d="M10.5 10.5V2.11803C10.5 1.37465 11.2823 0.891156 11.9472 1.22361L21.1708 5.83541C21.679 6.0895 22 6.60889 22 7.17705L22 18.132C22 18.5107 21.786 18.857 21.4472 19.0264L13.1708 23.1646C12.7485 23.3757 12.2515 23.3757 11.8292 23.1646L2.05277 18.2764C1.71398 18.107 1.49998 17.7607 1.49998 17.382V15.618C1.49998 15.2393 1.71398 14.893 2.05277 14.7236L10.5 10.5Z"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default Laptop;
