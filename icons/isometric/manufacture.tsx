import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Manufacture({
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
          d="M4.00684 10.7025V8.04007L5.89849 7.09937V10.0331L4.34536 10.8959L4.00684 10.7025Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M10.0242 7.60244V4.93997L11.9471 4.00317V6.93687L10.3939 7.79972L10.0242 7.60244Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M13 16.5V12.5L17 10.5V14.5L13 16.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M22.5 16L14.5 20V22L22.5 18V16Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M3.87046 14.1853L13.2928 18.8964C14.0326 19.2664 14.5 20.0226 14.5 20.8498C14.5 22.0674 13.2186 22.8594 12.1295 22.3148L2.70725 17.6037C1.96737 17.2337 1.5 16.4775 1.5 15.6503C1.5 14.4327 2.78139 13.6408 3.87046 14.1853Z"
          stroke={fill}
        />
        <path
          d="M13.5 19L21.4547 15.0227"
          stroke={fill}
          strokeLinecap="round"
        />
        <path d="M6.30396 15.3482L9.14355 13.9227" stroke={fill} />
        <path d="M9.7559 17.1354L12.0004 16" stroke={fill} />
        <path
          d="M13.7189 22.255L21.7189 18.255C22.1661 17.9709 22.5001 17.4508 22.5001 16.8497C22.5001 16.0225 22.0327 15.2663 21.2929 14.8963L17 12.7499M2.30054 14.2458L9.00172 10.8959"
          stroke={fill}
          strokeLinecap="round"
        />
        <path
          d="M16.4472 10.2236L13.6708 8.83541C13.2485 8.62426 12.7515 8.62426 12.3292 8.83541L9.55279 10.2236C9.214 10.393 9 10.7393 9 11.118V13.882C9 14.2607 9.214 14.607 9.55279 14.7764L12.3292 16.1646C12.7515 16.3757 13.2485 16.3757 13.6708 16.1646L16.4472 14.7764C16.786 14.607 17 14.2607 17 13.882V11.118C17 10.7393 16.786 10.393 16.4472 10.2236Z"
          stroke={fill}
        />
        <path
          d="M17 10.5L13.4472 12.2764C13.1657 12.4172 12.8343 12.4172 12.5528 12.2764L9 10.5"
          stroke={fill}
        />
        <path d="M13 12.5V16.5" stroke={fill} />
        <path d="M12.5 20.49V20.5" stroke={fill} strokeLinecap="round" />
        <path d="M3.5 15.99V16" stroke={fill} strokeLinecap="round" />
        <path d="M8 18.25V18.26" stroke={fill} strokeLinecap="round" />
        <path
          d="M5.72361 10.1382L4.22361 10.8882C4.08284 10.9586 3.91716 10.9586 3.77639 10.8882L2.27639 10.1382C2.107 10.0535 2 9.88037 2 9.69098V5.61803C2 5.23926 2.214 4.893 2.55279 4.72361L8.77639 1.6118C8.91716 1.54142 9.08284 1.54142 9.22361 1.6118L11.4472 2.72361C11.786 2.893 12 3.23926 12 3.61803V6.69098C12 6.88037 11.893 7.0535 11.7236 7.1382L10.7236 7.6382C10.3912 7.80442 10 7.56267 10 7.19098V5L6.1382 6.9309C6.0535 6.97325 6 7.05982 6 7.15451V9.69098C6 9.88037 5.893 10.0535 5.72361 10.1382Z"
          stroke={fill}
          strokeLinecap="round"
        />
        <path
          d="M12 4L4.22344 7.87855C4.08276 7.94871 3.91728 7.94863 3.77667 7.87833L2 6.98999"
          stroke={fill}
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export default Manufacture;
