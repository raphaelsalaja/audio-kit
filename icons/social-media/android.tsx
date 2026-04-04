import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Android({
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
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path d="M23.364,18.448c-.736,0-1.333-.595-1.333-1.33,0-.735,.596-1.33,1.332-1.331s1.333,.595,1.333,1.33c0,.734-.597,1.33-1.332,1.331m-14.728,0c-.736,0-1.333-.595-1.333-1.33s.596-1.33,1.332-1.331c.736,0,1.333,.595,1.333,1.33,0,.734-.597,1.33-1.332,1.331m15.206-8.013l2.663-4.605c.153-.265,.063-.603-.202-.756-.265-.153-.604-.062-.757,.202h0l-2.697,4.663c-2.062-.94-4.378-1.463-6.849-1.463s-4.787,.524-6.849,1.463l-2.696-4.663c-.153-.265-.492-.355-.757-.203-.265,.153-.356,.491-.203,.756h0l2.663,4.605C3.585,12.918,.458,17.54,0,23H32c-.458-5.46-3.585-10.082-8.158-12.565" />
      </g>
    </svg>
  );
}

export default Android;
