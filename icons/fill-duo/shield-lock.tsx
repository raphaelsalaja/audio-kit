import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShieldLock({
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
          d="M13.5 11.25C13.5 10.8362 13.8362 10.5 14.25 10.5C14.6638 10.5 15 10.8362 15 11.25V12H13.5V11.25ZM12 12.0177V11.25C12 10.0078 13.0078 9 14.25 9C15.4922 9 16.5 10.0078 16.5 11.25V12.0177C17.3478 12.1391 18 12.8683 18 13.75V15.25C18 16.2167 17.2161 17 16.25 17H12.25C11.2839 17 10.5 16.2167 10.5 15.25V13.75C10.5 12.8683 11.1522 12.1391 12 12.0177Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9.00028 1.05075C8.67031 1.05063 8.33372 1.16922 8.16963 1.22703C7.07517 1.61265 5.96344 1.95708 4.85274 2.30119C4.30643 2.47044 3.76038 2.63962 3.21675 2.81358C2.49139 3.04506 2 3.71932 2 4.48V11C2 12.9239 3.47441 14.3064 4.84192 15.1909C6.25089 16.1022 7.80803 16.6572 8.46011 16.8683C8.76807 16.9684 9.09216 16.9819 9.40738 16.9058C9.42059 16.9026 9.4338 16.8992 9.4469 16.8957C9.16291 16.413 9 15.8506 9 15.25V13.75C9 12.5953 9.60142 11.5828 10.5078 11.0064C10.6334 9.04922 12.2612 7.5 14.25 7.5C14.882 7.5 15.4775 7.65644 16 7.93271V4.48C16 3.71943 15.5071 3.04612 14.7836 2.81368L9.53357 1.13368C9.36084 1.079 9.1795 1.05082 9.00028 1.05075Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default ShieldLock;
