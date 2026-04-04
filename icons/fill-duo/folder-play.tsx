import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderPlay({
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
          d="M16.5 6.5H1.5V13.25C1.5 14.7692 2.73079 16 4.25 16H9.5V11.7735C9.5 10.7781 10.0362 9.85944 10.8971 9.36728C11.7611 8.87339 12.8247 8.88194 13.6805 9.38545L16.5 11.047V6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.25 2C2.73079 2 1.5 3.23079 1.5 4.75V6.5H16.5V6.25C16.5 4.73079 15.2692 3.5 13.75 3.5H8.72395L8.34569 3.02827C7.82347 2.37825 7.03552 2 6.201 2H4.25Z"
          fill={fill}
        />
        <path
          d="M12.2734 18C12.0546 18 11.8369 17.9443 11.6416 17.8325C11.2461 17.6064 11 17.1836 11 16.7285V11.7735C11 11.3184 11.2461 10.8956 11.6416 10.6695C12.0371 10.4434 12.5264 10.4468 12.9199 10.6783L17.124 13.1558C17.5166 13.3868 17.75 13.7964 17.75 14.251C17.75 14.7056 17.5166 15.1153 17.124 15.3462L12.9199 17.8237C12.7207 17.9409 12.497 18 12.2734 18Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FolderPlay;
