import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Chats({
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
          d="M19 17.5V9L22 7.5V16L19 17.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M12 21.5V13L15 11.5V20L12 21.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M15 11.5L12 13" stroke={fill} />
        <path d="M19 9L21.7037 7.64813" stroke={fill} />
        <path
          d="M2 8L11.4472 12.7236C11.786 12.893 12 13.2393 12 13.618V21.304"
          stroke={fill}
        />
        <path
          d="M9 4L18.4472 8.72361C18.786 8.893 19 9.23926 19 9.61803V17.3031"
          stroke={fill}
        />
        <path
          d="M6.12646 14.7069C6.12646 15.2894 5.73362 15.5255 5.24902 15.2343C4.76443 14.943 4.37158 14.2347 4.37158 13.6521C4.37158 13.0696 4.76443 12.8335 5.24902 13.1248C5.73362 13.416 6.12646 14.1244 6.12646 14.7069Z"
          fill={fill}
        />
        <path
          d="M9 16.1444C9 16.7269 8.60716 16.963 8.12256 16.6718C7.63796 16.3805 7.24512 15.6722 7.24512 15.0896C7.24512 14.5071 7.63796 14.271 8.12256 14.5623C8.60716 14.8535 9 15.5619 9 16.1444Z"
          fill={fill}
        />
        <path
          d="M15 15.5L18.3292 17.1646C18.7515 17.3758 19.2485 17.3758 19.6708 17.1646L21.4472 16.2764C21.786 16.107 22 15.7608 22 15.382V8.11803C22 7.73926 21.786 7.393 21.4472 7.22361L12.6708 2.83541C12.2485 2.62426 11.7515 2.62426 11.3292 2.83541L9.55279 3.72361C9.214 3.893 9 4.23926 9 4.61803V8.5"
          stroke={fill}
        />
        <path
          d="M2 16.5V8.61803C2 8.23926 2.214 7.893 2.55279 7.72361L4.32918 6.83541C4.75147 6.62426 5.24853 6.62426 5.67082 6.83541L14.4472 11.2236C14.786 11.393 15 11.7393 15 12.118V19.382C15 19.7608 14.786 20.107 14.4472 20.2764L12.6708 21.1646C12.2485 21.3758 11.7515 21.3758 11.3292 21.1646L9 20L5.5 18.25L3.68045 19.9396C3.0406 20.5337 2 20.08 2 19.2068V16.5Z"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default Chats;
