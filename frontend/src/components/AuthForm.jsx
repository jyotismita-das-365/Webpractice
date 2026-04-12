import { Link } from "react-router-dom";

const AuthForm = ({
  title,
  subtitle,
  fields,
  actionLabel,
  footerText,
  footerLinkLabel,
  footerLinkTo,
  onSubmit,
  submitLoading,
  error,
}) => {
  return (
    <section className="mx-auto flex min-h-[70vh] w-full max-w-3xl items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="store-shell w-full">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="space-y-4">
            <h1 className="font-serif text-4xl text-white sm:text-5xl">
              {title}
            </h1>
            <p className="max-w-xl text-sm leading-7 text-slate-200">
              {subtitle}
            </p>
          </div>

          <form className="space-y-4" onSubmit={onSubmit}>
            {fields.map((field) => (
              <label key={field.name} className="block space-y-2">
                <span className="text-sm font-medium text-slate-200">
                  {field.label}
                </span>
                {field.type === "select" ? (
                  <select
                    name={field.name}
                    value={field.value}
                    onChange={field.onChange}
                    className="input-field"
                    required={field.required}
                  >
                    {field.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    name={field.name}
                    type={field.type}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder={field.placeholder}
                    className="input-field"
                    required={field.required}
                    minLength={field.minLength}
                  />
                )}
              </label>
            ))}

            {error ? (
              <div className="rounded-xl border border-red-500 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            ) : null}

            <button
              type="submit"
              className="store-primary-btn w-full"
              disabled={submitLoading}
            >
              {submitLoading ? "Please wait..." : actionLabel}
            </button>

            <p className="text-center text-sm text-slate-200">
              {footerText}{" "}
              <Link
                to={footerLinkTo}
                className="font-semibold text-red-500 underline-offset-4 hover:underline"
              >
                {footerLinkLabel}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AuthForm;
